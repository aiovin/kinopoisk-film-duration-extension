function convertDuration(duration) {
    const minutes = parseInt(duration);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} ч ${remainingMinutes} мин.`;
}

function updateFilmDurations() {
    const durationSpans = document.querySelectorAll('div.info > span:nth-child(2)');

    durationSpans.forEach(span => {
        const match = span.textContent.match(/(\d+)\s*мин\./);
        if (match) {
            const newDuration = convertDuration(match[1]);
            span.textContent = span.textContent.replace(/(\d+)\s*мин\./, newDuration);
        }
    });
}

updateFilmDurations();
