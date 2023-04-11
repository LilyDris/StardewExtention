const checkboxes = document.querySelectorAll("input[type=checkbox]");
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", handleCheckboxClick);
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-btn');
    const tableBody = document.getElementById('table-body');
    toggleBtn.addEventListener('click', () => {
        if (tableBody.style.display === 'none') {
            tableBody.style.display = 'table';
        } else {
            tableBody.style.display = 'none';
        }
    });

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const row = this.parentNode.parentNode;
            if (this.checked) {
                row.style.textDecoration = "line-through";
            } else {
                row.style.textDecoration = "none";
            }
        });
    });
});
