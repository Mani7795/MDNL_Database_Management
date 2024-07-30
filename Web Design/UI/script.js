function searchGene() {
    const input = document.getElementById("geneInput").value.toLowerCase();
    const resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = ""; // Clear previous results

    const results = geneData.filter(gene => 
        gene.id.toLowerCase().includes(input) || gene.name.toLowerCase().includes(input)
    );

    if (results.length > 0) {
        results.forEach(gene => {
            const li = document.createElement("li");
            li.textContent = `${gene.id} - ${gene.name}`;
            resultsList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "No results found.";
        resultsList.appendChild(li);
    }
}