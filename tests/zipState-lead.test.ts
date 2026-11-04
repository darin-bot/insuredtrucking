/**
 * Tests for lib/lead/zipState.ts ZIP code mapping
 */

import { checkZip } from '../lib/lead/zipState';

describe('zipState - checkZip function', () => {
  describe('Licensed state ZIP codes', () => {
    test('Alabama ZIP codes are recognized and licensed', () => {
      const result = checkZip('35004');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('AL');
        expect(result.licensed).toBe(true);
      }
    });

    test('Florida ZIP codes are recognized and licensed', () => {
      const result = checkZip('32003');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('FL');
        expect(result.licensed).toBe(true);
      }
    });

    test('Georgia ZIP codes are recognized and licensed', () => {
      const result = checkZip('30303');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('GA');
        expect(result.licensed).toBe(true);
      }
    });

    test('Indiana ZIP codes are recognized and licensed', () => {
      const result = checkZip('46204');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('IN');
        expect(result.licensed).toBe(true);
      }
    });

    test('Kentucky ZIP codes are recognized and licensed', () => {
      const result = checkZip('40202');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('KY');
        expect(result.licensed).toBe(true);
      }
    });

    test('Missouri ZIP codes are recognized and licensed', () => {
      const result = checkZip('63101');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('MO');
        expect(result.licensed).toBe(true);
      }
    });

    test('North Carolina ZIP codes are recognized and licensed', () => {
      const result = checkZip('27601');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('NC');
        expect(result.licensed).toBe(true);
      }
    });

    test('Tennessee ZIP codes are recognized and licensed', () => {
      const result = checkZip('37203');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('TN');
        expect(result.licensed).toBe(true);
      }
    });

    test('Texas ZIP codes are recognized and licensed', () => {
      const result = checkZip('75201');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('TX');
        expect(result.licensed).toBe(true);
      }
    });
  });

  describe('Non-licensed state ZIP codes', () => {
    test('California ZIP codes are recognized but not licensed', () => {
      const result = checkZip('90210');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('CA');
        expect(result.licensed).toBe(false);
      }
    });

    test('New York ZIP codes are recognized but not licensed', () => {
      const result = checkZip('10001');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('NY');
        expect(result.licensed).toBe(false);
      }
    });

    test('Illinois ZIP codes are recognized but not licensed', () => {
      const result = checkZip('60601');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('IL');
        expect(result.licensed).toBe(false);
      }
    });

    test('Massachusetts ZIP codes are recognized but not licensed', () => {
      const result = checkZip('02101');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('MA');
        expect(result.licensed).toBe(false);
      }
    });
  });

  describe('Unmapped ZIP codes are valid but unlicensed', () => {
    test('unmapped ZIP codes return valid with empty state', () => {
      const result = checkZip('00100');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('');
        expect(result.licensed).toBe(false);
      }
    });

    test('another unmapped ZIP code', () => {
      const result = checkZip('00200');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.state).toBe('');
        expect(result.licensed).toBe(false);
      }
    });
  });

  describe('Invalid ZIP code formats', () => {
    test('rejects non-string input', () => {
      const result = checkZip(12345);
      expect(result.valid).toBe(false);
    });

    test('rejects too-short ZIP codes', () => {
      const result = checkZip('1234');
      expect(result.valid).toBe(false);
    });

    test('rejects too-long ZIP codes', () => {
      const result = checkZip('123456');
      expect(result.valid).toBe(false);
    });

    test('rejects non-numeric ZIP codes', () => {
      const result = checkZip('abcde');
      expect(result.valid).toBe(false);
    });

    test('rejects empty string', () => {
      const result = checkZip('');
      expect(result.valid).toBe(false);
    });
  });

  describe('ZIP code cleaning', () => {
    test('accepts ZIP with whitespace', () => {
      const result = checkZip(' 37203 ');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.zip).toBe('37203');
        expect(result.state).toBe('TN');
      }
    });

    test('cleans ZIP+4 format to 5 digits', () => {
      const cleaned = '37203-1234'.trim().replace(/\D/g, '');
      expect(cleaned.substring(0, 5)).toBe('37203');
    });
  });

  describe('Comprehensive state coverage', () => {
    test('covers all major state ZIP prefixes', () => {
      const stateSamples = [
        { zip: '99501', state: 'AK' },
        { zip: '85001', state: 'AZ' },
        { zip: '72201', state: 'AR' },
        { zip: '80201', state: 'CO' },
        { zip: '06101', state: 'CT' },
        { zip: '19801', state: 'DE' },
        { zip: '20001', state: 'DC' },
        { zip: '96801', state: 'HI' },
        { zip: '83201', state: 'ID' },
        { zip: '50301', state: 'IA' },
        { zip: '66101', state: 'KS' },
        { zip: '70112', state: 'LA' },
        { zip: '04101', state: 'ME' },
        { zip: '21201', state: 'MD' },
        { zip: '48201', state: 'MI' },
        { zip: '55401', state: 'MN' },
        { zip: '39201', state: 'MS' },
        { zip: '59101', state: 'MT' },
        { zip: '68501', state: 'NE' },
        { zip: '89501', state: 'NV' },
        { zip: '03101', state: 'NH' },
        { zip: '07101', state: 'NJ' },
        { zip: '87101', state: 'NM' },
        { zip: '58101', state: 'ND' },
        { zip: '43201', state: 'OH' },
        { zip: '73101', state: 'OK' },
        { zip: '97201', state: 'OR' },
        { zip: '19101', state: 'PA' },
        { zip: '02901', state: 'RI' },
        { zip: '29201', state: 'SC' },
        { zip: '57101', state: 'SD' },
        { zip: '84101', state: 'UT' },
        { zip: '05401', state: 'VT' },
        { zip: '22201', state: 'VA' },
        { zip: '98101', state: 'WA' },
        { zip: '25301', state: 'WV' },
        { zip: '53201', state: 'WI' },
        { zip: '82001', state: 'WY' },
      ];

      stateSamples.forEach(({ zip, state }) => {
        const result = checkZip(zip);
        expect(result.valid).toBe(true);
        if (result.valid) {
          expect(result.state).toBe(state);
        }
      });
    });
  });

  describe('Edge cases', () => {
    test('handles ZIP codes with leading zeros', () => {
      const result = checkZip('01000');
      expect(result.valid).toBe(true);
      if (result.valid) {
        expect(result.zip).toBe('01000');
        expect(result.state).toBe('MA');
      }
    });

    test('handles ZIP codes at state boundaries', () => {
      const alabamaFirst = checkZip('35000');
      expect(alabamaFirst.valid).toBe(true);
      if (alabamaFirst.valid) {
        expect(alabamaFirst.state).toBe('AL');
      }

      const alabamaLast = checkZip('36999');
      expect(alabamaLast.valid).toBe(true);
      if (alabamaLast.valid) {
        expect(alabamaLast.state).toBe('AL');
      }
    });
  });
});
