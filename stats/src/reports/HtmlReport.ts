import fs from 'fs';

import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
        <head>
            <title>Html Report</title>
        </head>
        <body>
            <h1>Analysis Report</h1>
            <div>${report}</div>
        </body> 
    `;

    fs.writeFileSync('report.html', html);
  }
}
