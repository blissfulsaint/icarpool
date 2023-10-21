export default class Post {
    constructor (name, type, date, time, start, end) {
        this.name = name;
        this.type = type;
        this.date = date;
        this.time = time;
        this.start = start;
        this.end = end;

        this.init();
    }

    async init() {
        const dateObject = new Date(this.date);

        const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };

        const formattedDate = dateObject.toLocaleDateString(undefined, dateOptions);

        const timeParts = this.time.match(/T(\d{2}):(\d{2})/);
        const hours = parseInt(timeParts[1]);
        const minutes = parseInt(timeParts[2]);
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
        const formattedTime = `${(hours % 12) || 12}:${minutes.toString().padStart(2, '0')} ${amOrPm}`;

        let html = `<section class="card">
            <div class="post-user">
                <img class="profile-img" src="./public/images/placeholder.png">
                <p>${this.name} <span>(${this.type})</span></p>
            </div>
            <p>Date: <span>${formattedDate}, ${formattedTime}</span></p>
            <p>Start: <span>${this.start}</span></p>
            <p>End: <span>${this.end}</span></p>
        </section>`;

        document.getElementById("post").insertAdjacentHTML('beforeend', html);
    }
}