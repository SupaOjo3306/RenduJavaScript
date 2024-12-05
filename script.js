fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/menuiserie.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {
        let nav = document.getElementById("nav")
        let header = document.getElementById("header");
        let promesse = document.getElementById("promesse");
        let produit = document.getElementById("produit");
        let temoignage = document.getElementById("temoignage");

        // nom de l'entreprise + nav
        let hh1 = document.createElement("h1");
        let ha1 = document.createElement("a");
        let ha2 = document.createElement("a");
        let ha3 = document.createElement("a");
    
        ha1.textContent = "Devis";
        ha2.textContent = "Nos produits";
        ha3.textContent = "témoignages";
        ha1.href = "#promesse"
        ha2.href = "#produit"
        ha3.href = "#temoignage"
        
        hh1.textContent = data.entreprise;
        nav.appendChild(hh1);
        nav.appendChild(ha1);
        nav.appendChild(ha2);
        nav.appendChild(ha3);



        // phrase d'accroche
        let hh2 = document.createElement("h2");
        hh2.textContent = data.propositionDeValeur;
        header.appendChild(hh2);

        
        // Section promesse
        data.promessesClients.forEach(element => {
            let divpromesse = document.createElement("div");
            promesse.appendChild(divpromesse);
            let divpara1 = document.createElement("p");
            divpara1.textContent = element
            promesse.appendChild(divpara1);
            
            
            
            
            
        });

        // bouton de devis
        let ha = document.createElement("a");
        ha.href =
        ha.textContent = data.texteBouton;
        promesse.appendChild(ha);


        // faire un foreach du tableau de realisation
        data.realisations.forEach(element => {
            let divre = document.createElement("div");
            produit.appendChild(divre)
            let h3produit = document.createElement("h3")
            h3produit.textContent = element.titre;
            divre.appendChild(h3produit);
            let description = document.createElement("p")
            description.textContent = element.description
            divre.appendChild(description);
            let imgR = document.createElement("img");
            imgR.src = element["image-url"];
            divre.appendChild(imgR)
            
        });

        

        // faire un foreach du tableau de temoignage 
        data.temoignages.forEach(element => {
            let divte = document.createElement("div");
            temoignage.appendChild(divte);
            let typeprestation = document.createElement("p");
            typeprestation.textContent = element.typePrestation;
            divte.appendChild(typeprestation);
            let commentaire = document.createElement("p");
            commentaire.textContent = element.commentaire;
            divte.appendChild(commentaire);
            let prenom = document.createElement("h3");
            prenom.textContent = element.prenom
            divte.appendChild(prenom);
            let note = document.createElement("p")
            note.textContent = `Il nous as attribué la note de ${element.note}/5 !`
            divte.appendChild(note);

            
        });
        
        
        
        

        console.log(data);

    })
    .catch(error => console.error('Error:', error));



