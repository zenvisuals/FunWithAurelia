export class Welcome {
    heading = 'Welcome to My site!';
    firstName = 'Zhiquan';
    lastName = 'Chee';

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    submit() {
        alert(`Welcome, ${this.fullName}!`)
    }
}
