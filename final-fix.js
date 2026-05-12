const fs = require('fs');

let content = fs.readFileSync('constants/blogData.tsx', 'utf8');

// Fix remaining encoding issues
content = content.replace(/Yes â€"/g, 'Yes,');
content = content.replace(/Yes â€"/g, 'Yes,');

// Now add styled FAQs by finding the FAQ section and replacing it
const faqStart = content.indexOf('      <h2>Frequently Asked Questions</h2>');
const faqEnd = content.indexOf('      <h2>Related Articles</h2>', faqStart);

if (faqStart !== -1 && faqEnd !== -1) {
  const beforeFAQ = content.substring(0, faqStart);
  const afterFAQ = content.substring(faqEnd);
  
  const styledFAQ = `      <h2>Frequently Asked Questions</h2>

      <div style="margin: 40px 0;">
        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-left: 4px solid #19C58B; padding: 24px; margin-bottom: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <h3 style="color: #0f172a; font-size: 1.25rem; font-weight: 700; margin: 0 0 12px 0;">Q: How do I know if my gutters are blocked?</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;"><strong style="color: #19C58B;">A:</strong> The clearest signs are water overflowing over the gutter edge during rainfall, green or black staining running down external walls (as shown in the before photograph above), visible greenery growing from the gutterline, and fascias that are sagging or pulling away from the roofline. If you cannot remember when they were last cleaned, book a clean now.</p>
        </div>

        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-left: 4px solid #19C58B; padding: 24px; margin-bottom: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <h3 style="color: #0f172a; font-size: 1.25rem; font-weight: 700; margin: 0 0 12px 0;">Q: What causes the green and black staining on walls below gutters?</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;"><strong style="color: #19C58B;">A:</strong> This staining is caused by gutter overflow carrying algae, moss, silt, and organic debris continuously down the brickwork every time it rains. It is one of the most common visible signs of a blocked gutter in Birmingham. Left untreated, the staining penetrates the mortar joints and can cause internal damp. As our before-and-after photograph shows, professional gutter cleaning removes the source of the problem entirely.</p>
        </div>

        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-left: 4px solid #19C58B; padding: 24px; margin-bottom: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <h3 style="color: #0f172a; font-size: 1.25rem; font-weight: 700; margin: 0 0 12px 0;">Q: How often should gutters be cleaned in Birmingham?</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;"><strong style="color: #19C58B;">A:</strong> At least once a year, ideally in late autumn after the main leaf fall (October to December). Properties near trees should be cleaned twice a year in spring and autumn. Commercial properties are best cleaned every six months.</p>
        </div>

        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-left: 4px solid #19C58B; padding: 24px; margin-bottom: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <h3 style="color: #0f172a; font-size: 1.25rem; font-weight: 700; margin: 0 0 12px 0;">Q: Can blocked gutters cause the green staining I can see on my walls?</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;"><strong style="color: #19C58B;">A:</strong> Yes, this is exactly what causes it. When a gutter is blocked, rainwater overflows continuously down the same section of wall, depositing algae and moss spores that grow into the visible green streaking. Clearing the gutter stops the overflow and with it the source of the staining.</p>
        </div>

        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-left: 4px solid #19C58B; padding: 24px; margin-bottom: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <h3 style="color: #0f172a; font-size: 1.25rem; font-weight: 700; margin: 0 0 12px 0;">Q: How much does it cost to clear a blocked gutter in Birmingham?</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;"><strong style="color: #19C58B;">A:</strong> WOW Gutters prices start from £50 for a bungalow, £75 for a semi-detached house, and £95 for a detached property. Downpipe inspection and clearance is included. Use our <a href="/gutter-cleaning-calculator" style="color: #19C58B; text-decoration: underline;">cost calculator</a> for an instant estimate.</p>
        </div>

        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-left: 4px solid #19C58B; padding: 24px; margin-bottom: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <h3 style="color: #0f172a; font-size: 1.25rem; font-weight: 700; margin: 0 0 12px 0;">Q: Do you use ladders to clean gutters?</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;"><strong style="color: #19C58B;">A:</strong> No. WOW Gutters uses a professional ground-level high-reach vacuum system that cleans gutters safely without ladders or scaffolding, protecting your fascias, roof tiles, and stonework from any risk of contact damage.</p>
        </div>

        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-left: 4px solid #19C58B; padding: 24px; margin-bottom: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <h3 style="color: #0f172a; font-size: 1.25rem; font-weight: 700; margin: 0 0 12px 0;">Q: Do you provide before and after photos?</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;"><strong style="color: #19C58B;">A:</strong> Yes, we photograph your guttering before and after every single job and send the images directly to you, just like the real Birmingham job photograph shown in this article.</p>
        </div>

        <div style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-left: 4px solid #19C58B; padding: 24px; margin-bottom: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <h3 style="color: #0f172a; font-size: 1.25rem; font-weight: 700; margin: 0 0 12px 0;">Q: Is there a guarantee on the work?</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;"><strong style="color: #19C58B;">A:</strong> Yes. All WOW Gutters cleaning work is backed by a 1-year service guarantee. If your gutters block again within 12 months of our clean, we return and clear them at no additional charge.</p>
        </div>
      </div>

      `;
  
  content = beforeFAQ + styledFAQ + afterFAQ;
  
  fs.writeFileSync('constants/blogData.tsx', content, 'utf8');
  console.log('✅ Fixed encoding and added styled FAQs');
} else {
  console.log('❌ Could not find FAQ section');
}
