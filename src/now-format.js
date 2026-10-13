// Pure date/datetime formatter.
// `date` is injectable so tests can be deterministic (pass a fixed Date).
export function formatNow(date = new Date(), mode = 'datetime') {
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear() % 100;

    if (mode === 'date') {
        return `${month}/${day}/${year}`;
    }

    // Default: date + time (MM/DD/YY h:mm AM/PM)
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    if (hours === 0) hours = 12;
    return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
}
