fetch("data.json")
.then(r => r.json())
.then(data => {

    const content = document.getElementById("content");

    data.categories.forEach(cat => {
        
        const category = document.createElement("div");
        category.className = "category";

        const header = document.createElement("div");
        header.className = "category-header";
        header.textContent = cat.name;

        const body = document.createElement("div");
        body.className = "category-content";

        cat.programs.forEach(program => {
            
            const card = document.createElement("div");
            card.className = "program-card";

            let downloads = "";

            program.downloads.forEach(d => {

                downloads += `<a href="${d.url}" class="pdb ${d.class}">${d.name}`;

            });

            card.innerHTML = `
                <p class="program-name">${program.name}</p>
                <p class="program-description">${program.description}</p>
                <p class="pdt"></p>
                <div class="program-download">
                    ${downloads}
                </div>
            `

            body.appendChild(card)
        });

        category.appendChild(header);
        category.appendChild(body);
        content.appendChild(category);
    });
})