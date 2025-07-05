const tableBody = document.querySelector('tbody');

document.body.addEventListener("dblclick", (e) => {
    if (e.target.matches('.editable') && !e.target.querySelector('input')) {
        const span = e.target;
        const currentText = span.textContent.trim();
        span.textContent = "";

        const input = document.createElement('input');
        input.value = currentText;
        span.appendChild(input);
        input.focus();

        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                span.textContent = input.value || "please edit me";
            }
        });

        input.addEventListener("blur", () => {
            span.textContent = input.value || "please edit me";
        });
    }
});

document.body.addEventListener("click", (e) => {
    if (e.target.matches('button.add-event')) {
        const newRow = document.createElement('tr');

        const tdTime = document.createElement('td');
        const tdLoc = document.createElement('td');
        const tdAct = document.createElement('td');

        const deleteBtn = document.createElement('button');
        deleteBtn.className = "delete";
        deleteBtn.textContent = "-";

        const spanTime = document.createElement('span');
        spanTime.className = "editable";
        spanTime.textContent = "XXAM - XXPM";

        tdTime.append(deleteBtn, spanTime);

        tdLoc.innerHTML = `<span class="editable">please edit me</span>`;
        tdAct.innerHTML = `<span class="editable">please edit me</span>`;

        newRow.append(tdTime, tdLoc, tdAct);
        tableBody.appendChild(newRow);
    }
});

document.body.addEventListener("click", (e) => {
    if (e.target.matches('button.delete')) {
        e.target.closest('tr').remove();
    }
});
