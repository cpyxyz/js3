init.view.createInsurance = {
    home: function () {
        const saveBtn = document.forms['insurance'].commit;

        saveBtn.addEventListener('click', init.view.createInsurance.handleSaveButtonClick);
    },
    handleSaveButtonClick: function () {
        const formElement = document.forms['insurance'];
        const newInsurance = {
            inumber: formElement.inumber.value,
            fname: formElement.fname.value,
            lname: formElement.lname.value,
            vnumber: formElement.vnumber.value,
        };

        Insurance.create(newInsurance);

    },
};
