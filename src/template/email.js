/**
 *
 * @param {*} childHtml
 * @returns
 */
function _getHtmlWrapper(childHtml) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thông báo lịch cúp điện</title>
        <style>
            td {
                font-family: Arial, Helvetica, sans-serif;
            }
        </style>
    </head>

    <body>
        <main>
            ${childHtml}
        </main>
    </body>

    </html>
    `;
}

/**
 *
 * @param {Array<
 * {
 *  headquarters:string,
 *  date:string,
 *  time:string,
 *  area:string,
 *  reason:string,
 *  status:string,
 * }
 * >} schedules
 * @returns html
 */
function getTemplate1(schedules) {
    return _getHtmlWrapper(
        schedules
            .map((schedule) => {
                return `
            <table>
                <tbody>
                    <tr>
                        <td style="color: #51829B;">Điện lực:</td>
                        <td>${schedule.headquarters}</td>
                    </tr>
                    <tr>
                        <td style="color: #51829B;">Ngày:</td>
                        <td>${schedule.date}</td>
                    </tr>
                    <tr>
                        <td style="color: #51829B;">Thời gian:</td>
                        <td>${schedule.time}</td>
                    </tr>
                    <tr>
                        <td style="color: #51829B;">Khu vực:</td>
                        <td>${schedule.area}</td>
                    </tr>
                    <tr>
                        <td style="color: #51829B;">Lý do:</td>
                        <td>${schedule.reason}</td>
                    </tr>
                    <tr>
                        <td style="color: #51829B;">Trạng thái:</td>
                        <td>${schedule.status}</td>
                    </tr>
                </tbody>
            </table>
            `;
            })
            .join("<hr>")
    );
}

module.exports = getTemplate1;
