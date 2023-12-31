document.addEventListener('alpine:init', () => {
    
    Alpine.data('drugApp', () => {

		return {

           getCompound: [],

            init() {
                this.getAllCompounds();
            },

            getAllCompounds() {
                const getAllCompoundsURL = `/get_compound`;
                axios.get(getAllCompoundsURL)
                .then(result => {
                    this.getCompound = result.data.getCompound;
                    
                })
                .catch(error => {
                    console.error(error);
                });
                
            },

            getLogP(compoundId) {
                const getLogPURL = `/get_logp/${compoundId}`;
                axios.get(getLogPURL)
                    .then(result => {
                        // Handle LogP data returned from the server
                        console.log('LogP:', result.data.LogP);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },

            predictLipinski(data) {
                const predictLipinskiURL = '/predict_lipinski';
                axios.post(predictLipinskiURL, data)
                    .then(response => {
                        // Handle prediction response from the server
                        console.log('Prediction Result:', response.data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },

            calculateMolecularWeight(data) {
                const calculateMolecularWeightURL = '/calculate_molecular_weight';
                axios.post(calculateMolecularWeightURL, data)
                    .then(response => {
                        // Handle calculated molecular weight returned from the server
                        console.log('Calculated Molecular Weight:', response.data.molecular_weight);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },

            searchCompound(molecule) {
                const searchCompoundURL = '/search-api';
                axios.post(searchCompoundURL, { molecule: molecule })
                    .then(response => {
                        // Handle search results returned from the server
                        console.log('Search Results:', response.data.results);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }


        }

    })

});