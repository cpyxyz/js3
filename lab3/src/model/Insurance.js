class Insurance {
    constructor(inumber, fname, lname, vnumber) {
        this.inumber = inumber;
        this.fname = fname;
        this.lname = lname;
        this.vnumber = vnumber;
    }

    static create({ inumber, fname, lname, vnumber }) {

        if (fname === '') {
            return alert('Enter first name');
        } else {
            const regex = new RegExp('^[a-zA-Z\s]+$', 'g');
            if (regex.test(fname) === false || fname.length < 4 || fname.length > 20) {
                return alert('first name not valid')
            }
        }
        if (lname === '') {
            return alert('Enter Last name');
        } else {
            const regex = new RegExp('^[a-zA-Z\s]+$', 'g');
            if (regex.test(lname) === false || lname.length < 4 || lname.length > 20) {
                return alert('last name not valid')
            }
        }
        if (vnumber === '') {
            return alert('Enter vehicle number');
        } else {
            const regex = new RegExp('^[a-zA-Z0-9\s]+$', 'g');
            if (regex.test(vnumber) === false || vnumber.length < 4 || vnumber.length > 10) {
                return alert('vehicle number not valid')
            }
        }
        if (inumber === '') {
            return alert('Enter Insurance number');
        } else {
            const regex = new RegExp('^[0-9]+$', 'g');
            if ((regex.test(inumber) === false) || inumber.length < 8) {
                return alert('Insurance number not valid')
            }
        }

        new Insurance(inumber, fname, lname, vnumber);

        const data = "Insurance Record Created! \nInsurance Number: " + inumber + "\nFirst Name: " + fname + "\nLast Name: " + lname + "\nVehicle Number:" + vnumber;

        alert(data);
        const formElement = document.forms['insurance'];
        formElement.reset();
    }
}