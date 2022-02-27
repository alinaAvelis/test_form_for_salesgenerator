function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    document.body.style.overflow = '';
}

function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.remove('hide');
    modal.classList.add('opened');
    document.body.style.overflow = 'hidden'; 
}

function modal(triggetSelector, modalSelector, modalCloseSelector) {

    const modalTrigger = document.querySelectorAll(triggetSelector),
          modal = document.querySelector(modalSelector),
          closeBtn = document.querySelectorAll(modalCloseSelector);


    modalTrigger.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(modalSelector);

            if(modal.hasAttribute('data-thanks_modal')) {
                setTimeout(() => closeModal(modalSelector), 3000);
            }
        });
         
    });

    closeBtn.forEach(btnClose => {
        btnClose.addEventListener('click', () => {
            closeModal(modalSelector);     
        })
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal(modalSelector);
        }
    });
    
}

export {closeModal, openModal};

export default modal;
