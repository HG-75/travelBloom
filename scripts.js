function performSearch() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const recommendations = [
        {
            keyword: 'beach',
            results: [
                { 
                    name: 'Maldives Beach', 
                    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1hbGRpdmVzJTIwYmVhY2h8ZW58MHx8fHwxNjY5MzUxNTQ3&ixlib=rb-4.0.3&q=80&w=400' 
                },
                { 
                    name: 'Bora Bora Beach', 
                    img: './images/beach.jpg' 
                }
            ]
        },
        {
            keyword: 'temple',
            results: [
                { 
                    name: 'Angkor Wat', 
                    img: './images/angkor wat.jpg' 
                },
                { 
                    name: 'Golden Temple', 
                    img: './images/golden temple.jpg' 
                }
            ]
        },
        {
            keyword: 'country',
            results: [
                { 
                    name: 'New York', 
                    img: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=800' 
                },
                { 
                    name: "Italy", 
                    img: "./images/italy.jpg" 
                }
            ]
        }
    ];

    const matchedRecommendations = recommendations.filter(r => searchInput.includes(r.keyword));

    if (matchedRecommendations.length > 0) {
        matchedRecommendations.forEach(group => {
            group.results.forEach(item => {
                const resultDiv = document.createElement('div');
                resultDiv.innerHTML = `
                    <img src="${item.img}" alt="${item.name}" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                    <h3>${item.name}</h3>
                `;
                resultsContainer.appendChild(resultDiv);
            });
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found. Try searching for beaches, temples, or countries.</p>';
    }
}

function clearResults() {
    document.getElementById('search-bar').value = '';
    document.getElementById('results').innerHTML = '';
}

function showAlert() {
    alert('We are working on it! The booking feature will be available soon.');
}
