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
        let html = `<section class="card">
            <div class="post-user">
                <img class="profile-img" src="./public/images/placeholder.png">
                <p>${this.name} <span>(${this.type})</span></p>
            </div>
            <p>Date: <span>${this.date}, ${this.time}</span></p>
            <p>Start: <span>${this.start}</span></p>
            <p>End: <span>${this.end}</span></p>
        </section>`;

        document.getElementById("post").insertAdjacentHTML('beforeend', html);
    }
}