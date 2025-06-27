
        const quoteText = document.getElementById('quoteText');
        const quoteAuthor = document.getElementById('quoteAuthor');
        const newQuoteBtn = document.getElementById('newQuoteBtn');
        const shareQuoteBtn = document.getElementById('shareQuoteBtn');
        const messageBox = document.getElementById('messageBox');

        // Sample quotes (can be fetched from an API in a real application)
        const quotes = [
            {
                quote: "जब तक आप कोशिश करना नहीं छोड़ते, आप असफल नहीं होते।",
                author: "अल्बर्ट आइंस्टीन"
            },
            {
                quote: "सफलता अंतिम नहीं है, विफलता घातक नहीं है: यह जारी रखने का साहस है जो मायने रखता है।",
                author: "विंस्टन चर्चिल"
            },
            {
                quote: "आपका समय सीमित है, इसे किसी और की जिंदगी जीने में बर्बाद न करें।",
                author: "स्टीव जॉब्स"
            },
            {
                quote: "विश्वास करो कि तुम कर सकते हो और तुम आधे रास्ते तक पहुँच जाओगे।",
                author: "थियोडोर रूजवेल्ट"
            },
            {
                quote: "आपके पास जो कुछ भी है उसके लिए आभारी रहें; आपके पास अधिक होगा। यदि आप उन चीजों पर ध्यान केंद्रित करते हैं जो आपके पास नहीं हैं, तो आपके पास कभी पर्याप्त नहीं होगा।",
                author: "ओपरा विनफ्रे"
            },
            {
                quote: "प्रेरणा वहीं से आती है जहाँ से आपका दिल है।",
                author: "एकाग्रता"
            },
            {
                quote: "एक सफल व्यक्ति बनने की कोशिश न करें, बल्कि एक मूल्यवान व्यक्ति बनने की कोशिश करें।",
                author: "अल्बर्ट आइंस्टीन"
            },
            {
                quote: "भविष्य उनका है जो अपने सपनों की सुंदरता में विश्वास करते हैं।",
                author: "एलेनोर रूजवेल्ट"
            },
            {
                quote: "कार्य ही सफलता की कुंजी है।",
                author: "पाब्लो पिकासो"
            },
            {
                quote: "यदि आप कुछ महान बनाना चाहते हैं, तो छोटे कदम उठाएं, लेकिन उन्हें लगातार लें।",
                author: "एलन बेकर"
            }
        ];

        let currentQuoteIndex = -1;

        // Function to display a random quote
        function displayRandomQuote() {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * quotes.length);
            } while (randomIndex === currentQuoteIndex); // Ensure new quote is different from the current one

            currentQuoteIndex = randomIndex;
            const selectedQuote = quotes[randomIndex];
            quoteText.textContent = `"${selectedQuote.quote}"`;
            quoteAuthor.textContent = `- ${selectedQuote.author}`;
        }

        // Function to show a temporary message box
        function showMessageBox(message) {
            messageBox.textContent = message;
            messageBox.classList.add('show');
            setTimeout(() => {
                messageBox.classList.remove('show');
            }, 2000); // Hide after 2 seconds
        }

        // Event listener for "नया उद्धरण" button
        newQuoteBtn.addEventListener('click', displayRandomQuote);

        // Event listener for "साझा करें" button
        shareQuoteBtn.addEventListener('click', () => {
            const quoteToCopy = `${quoteText.textContent} ${quoteAuthor.textContent}`;
            // Use document.execCommand('copy') for better compatibility in iframes
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = quoteToCopy;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            try {
                document.execCommand('copy');
                showMessageBox('उद्धरण कॉपी किया गया!');
            } catch (err) {
                console.error('कॉपी करने में विफल:', err);
                showMessageBox('कॉपी करने में समस्या हुई।');
            }
            document.body.removeChild(tempTextArea);
        });

        // Display a quote when the page loads
        document.addEventListener('DOMContentLoaded', displayRandomQuote);
