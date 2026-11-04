/**
 * Calendar utilities: generate .ics file and direct Google Calendar link
 */

export function generateIcsCalendar(event, couple) {
  // Event times for 22 November 2026
  const startDate = new Date('2026-11-22T08:30:00+05:30');
  const endDate = new Date('2026-11-22T10:30:00+05:30');

  const formatUtc = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const title = `Wedding: ${couple.groom.name.en} & ${couple.bride.name.en}`;
  const description = `${event.title.en} - ${event.subtitle.en}\\n${event.description.en}\\nVenue: ${event.venue.en}`;
  const location = `${event.venue.en}`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Tamil Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:wedding-${Date.now()}@tamilwedding.in`,
    `DTSTAMP:${formatUtc(new Date())}`,
    `DTSTART:${formatUtc(startDate)}`,
    `DTEND:${formatUtc(endDate)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `Wedding-${couple.groom.name.en}-${couple.bride.name.en}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function getGoogleCalendarUrl(event, couple) {
  const start = '20261122T030000Z'; // UTC for 8:30 AM IST
  const end = '20261122T050000Z';   // UTC for 10:30 AM IST
  const title = encodeURIComponent(`${couple.groom.name.en} & ${couple.bride.name.en} Wedding (${event.title.en})`);
  const details = encodeURIComponent(`${event.description.en}\n\nVenue: ${event.venue.en}`);
  const location = encodeURIComponent(event.venue.en);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}

