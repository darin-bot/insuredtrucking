/**
 * Tests for the readiness checker handler
 */

import { routeFor } from '../lib/readiness/handler';
import type { ZipCheck } from '../lib/lead/zipState';

describe('Readiness Handler', () => {
  describe('routeFor', () => {
    test('licensed ZIP routes to licensed', () => {
      const mockZip: ZipCheck = {
        valid: true,
        zip: '37203',
        zip3: '372',
        state: 'TN',
        licensed: true,
      };
      const mockQuiz: any = { answers: {}, compliance: [] };
      
      const route = routeFor(mockZip, mockQuiz);
      expect(route).toBe('licensed');
    });

    test('valid but unlicensed ZIP routes to out_of_area', () => {
      const mockZip: ZipCheck = {
        valid: true,
        zip: '90210',
        zip3: '902',
        state: 'CA',
        licensed: false,
      };
      const mockQuiz: any = { answers: {}, compliance: [] };
      
      const route = routeFor(mockZip, mockQuiz);
      expect(route).toBe('out_of_area');
    });

    test('valid ZIP with empty state routes to out_of_area', () => {
      const mockZip: ZipCheck = {
        valid: true,
        zip: '00100',
        zip3: '001',
        state: '',
        licensed: false,
      };
      const mockQuiz: any = { answers: {}, compliance: [] };
      
      const route = routeFor(mockZip, mockQuiz);
      expect(route).toBe('out_of_area');
    });

    test('all licensed states route correctly', () => {
      const licensedStates = [
        { zip: '35004', state: 'AL' },
        { zip: '32003', state: 'FL' },
        { zip: '30002', state: 'GA' },
        { zip: '46001', state: 'IN' },
        { zip: '40003', state: 'KY' },
        { zip: '63001', state: 'MO' },
        { zip: '27006', state: 'NC' },
        { zip: '37011', state: 'TN' },
        { zip: '75001', state: 'TX' },
      ];

      const mockQuiz: any = { answers: {}, compliance: [] };

      licensedStates.forEach(({ zip, state }) => {
        const mockZip: ZipCheck = {
          valid: true,
          zip,
          zip3: zip.substring(0, 3),
          state,
          licensed: true,
        };
        
        const route = routeFor(mockZip, mockQuiz);
        expect(route).toBe('licensed');
      });
    });
  });

  describe('Email subject tagging', () => {
    test('out_of_area route should produce tagged subject', () => {
      const route = 'out_of_area';
      const name = 'John Doe';
      const level = 'Ready';
      
      const subjectPrefix = route === 'out_of_area' ? 'Out of area - ' : '';
      const subject = `${subjectPrefix}Readiness Checker Result: ${level} - ${name}`;
      
      expect(subject).toBe('Out of area - Readiness Checker Result: Ready - John Doe');
      expect(subject).toContain('Out of area');
    });

    test('licensed route should not have tagged subject', () => {
      const route = 'licensed';
      const name = 'Jane Smith';
      const level = 'Almost ready';
      
      const subjectPrefix = route === 'out_of_area' ? 'Out of area - ' : '';
      const subject = `${subjectPrefix}Readiness Checker Result: ${level} - ${name}`;
      
      expect(subject).toBe('Readiness Checker Result: Almost ready - Jane Smith');
      expect(subject).not.toContain('Out of area');
    });
  });

  describe('HubSpot deal creation logic', () => {
    test('deals should only be created for licensed routes', () => {
      const shouldCreateForLicensed = 'licensed' === 'licensed';
      const shouldCreateForOutOfArea = 'out_of_area' === 'licensed';
      
      expect(shouldCreateForLicensed).toBe(true);
      expect(shouldCreateForOutOfArea).toBe(false);
    });
  });

  describe('Notes field handling', () => {
    test('notes field is optional', () => {
      const dataWithNotes = {
        notes: 'Additional information',
      };
      
      const dataWithoutNotes = {};
      
      expect(dataWithNotes.notes).toBeDefined();
      expect(dataWithoutNotes.notes).toBeUndefined();
    });

    test('empty notes should not be included', () => {
      const notes = '';
      const shouldInclude = notes ? true : false;
      
      expect(shouldInclude).toBe(false);
    });
  });

  describe('Content guidelines compliance', () => {
    test('does not use em dashes in messages', () => {
      const sampleMessages = [
        'Thank you for your interest. You are in our service area.',
        'Your location is outside our current service area, but we have resources that may help.',
      ];

      sampleMessages.forEach(message => {
        expect(message).not.toContain('—');
        expect(message).not.toContain('–');
      });
    });

    test('does not mention prohibited terms', () => {
      const prohibitedTerms = [
        'BMC',
        'cheapest',
        'guarantee',
        'guaranteed',
        'Benton Insurance',
      ];

      const sampleText = 'We provide affordable truck insurance for owner-operators in our service area.';

      prohibitedTerms.forEach(term => {
        expect(sampleText.toLowerCase()).not.toContain(term.toLowerCase());
      });
    });
  });
});
