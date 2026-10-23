import { siteConfig } from "@/lib/site-config";

export function OpeningHours() {
  return (
    <div>
      <h2 className="font-display text-3xl text-espresso">Opening hours</h2>
      <table className="mt-4 w-full text-left">
        <caption className="sr-only">Weekly opening hours for Cloud Nine Bakery</caption>
        <tbody>
          {siteConfig.hours.days.map((day) => (
            <tr key={day.day} className="border-b border-line">
              <th scope="row" className="py-3 pr-4 font-medium text-espresso">
                {day.day}
              </th>
              <td className="py-3 text-cocoa">{day.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
