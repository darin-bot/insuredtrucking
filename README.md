# Affordable Truck Insurance Inc

Marketing website for Affordable Truck Insurance Inc (insuredtrucking.com) - an independent insurance agency specializing in commercial trucking coverage for owner-operators and for-hire trucking companies.

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **Export:** Static site export (`output: 'export'`)
- **Hosting:** Cloudflare Pages
- **Domain:** insuredtrucking.com

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Build the static site:

```bash
npm run build
```

The static site will be exported to the `out` directory.

## Deployment to Cloudflare Pages

### Step 1: Connect GitHub Repository

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages**
3. Click **Create application** → **Pages** → **Connect to Git**
4. Select your GitHub account and choose this repository (`insuredtrucking`)
5. Click **Begin setup**

### Step 2: Configure Build Settings

On the build configuration page, enter the following settings:

- **Project name:** `insuredtrucking`
- **Production branch:** `main` (or your default branch)
- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `npm run build`
- **Build output directory:** `out`

Click **Save and Deploy**

Cloudflare Pages will now:
1. Clone your repository
2. Install dependencies
3. Run the build command
4. Deploy the contents of the `out` directory
5. Provide a `*.pages.dev` URL for your site

### Step 3: Configure Custom Domain

Once the initial deployment completes:

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter `insuredtrucking.com`
4. Click **Continue**

### Step 4: Update DNS Records

In your Cloudflare DNS settings for insuredtrucking.com:

1. **Delete the existing A record:**
   - Type: `A`
   - Name: `@`
   - Content: `35.212.92.211`
   - Delete this record

2. **Add CNAME for root domain:**
   - Type: `CNAME`
   - Name: `@`
   - Target: `insuredtrucking.pages.dev` (use your actual Pages subdomain)
   - Proxy status: **Proxied** (orange cloud)
   - TTL: Auto
   - Click **Save**

3. **Add CNAME for www subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Target: `insuredtrucking.pages.dev` (use your actual Pages subdomain)
   - Proxy status: **Proxied** (orange cloud)
   - TTL: Auto
   - Click **Save**

DNS propagation may take a few minutes. Once complete, your site will be accessible at:
- https://insuredtrucking.com
- https://www.insuredtrucking.com

### Automatic Deployments

Cloudflare Pages will automatically deploy your site when you push to your production branch (usually `main`). You can view deployment history and logs in the Cloudflare Pages dashboard.

## Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── florida-trucking-insurance/
│   ├── georgia-trucking-insurance/
│   ├── kentucky-trucking-insurance/
│   ├── new-authority-insurance/ # New authority coverage
│   ├── quote/                   # Quote request page
│   ├── states/                  # States index page
│   ├── texas-trucking-insurance/
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with header/footer
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── Footer.tsx               # Site footer
│   └── Header.tsx               # Site header with navigation
├── public/                       # Static assets
├── next.config.js               # Next.js configuration (static export)
├── tailwind.config.ts           # Tailwind CSS configuration
├── wrangler.toml                # Cloudflare configuration
└── package.json                 # Dependencies and scripts
```

## Pages

- **Home** (`/`) - Overview of services, coverage types, states served
- **New Authority Insurance** (`/new-authority-insurance`) - Information for new trucking companies
- **Kentucky Trucking Insurance** (`/kentucky-trucking-insurance`) - KYTC Form E, KYU clarification
- **Texas Trucking Insurance** (`/texas-trucking-insurance`) - TxDMV Form E requirements
- **Florida Trucking Insurance** (`/florida-trucking-insurance`) - Florida coverage information
- **Georgia Trucking Insurance** (`/georgia-trucking-insurance`) - Georgia coverage information
- **States** (`/states`) - Index of all nine licensed states (AL, FL, GA, IN, KY, MO, NC, TN, TX)
- **Quote** (`/quote`) - Quote request information with gating to licensed states
- **About** (`/about`) - Agency information, Darin Austin bio, payment security notice

## Business Information

**Legal Name:** Affordable Truck Insurance Inc  
**Domain:** insuredtrucking.com  
**Email:** darin@insuredtrucking.com  
**Owner:** Darin Austin, Benton, Kentucky  
**Designation:** Transportation Risk Specialist (MCIEF.org)

**Licensed States:**
- Alabama
- Florida
- Georgia
- Indiana
- Kentucky
- Missouri
- North Carolina
- Tennessee
- Texas

**Coverage Types:**
- Primary Liability (FMCSA required)
- Physical Damage
- Cargo Insurance
- General Liability
- Occupational Accident

**Freight Types:**
- General Freight
- Flatbed
- Reefer (Temperature-controlled)

## Design Specifications

- **Mobile-first:** Optimized for mobile devices with touch-friendly tap targets (48px minimum)
- **Color palette:** Navy (#1e3a8a), Steel (#64748b), White
- **Typography:** Inter font family
- **Sticky CTA:** "Get a Quote" button remains accessible on mobile
- **Responsive:** Fully responsive across all device sizes

## Important Notes

- All business information is factual - no invented licenses, phone numbers, or testimonials
- Quote form emails to darin@insuredtrucking.com
- Footer includes payment security notice about Zelle/Cash App
- No carrier logos or specific pricing claims
- Schema.org LocalBusiness JSON-LD included with email contact (no phone or street address)
- Licensed states only - quote page includes gating notice

## Contact

For questions about the website or quote requests:  
**Email:** darin@insuredtrucking.com
