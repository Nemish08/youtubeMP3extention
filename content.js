
function insertDownloadButton() {
    const videoTitleElement = document.querySelector('.ytp-right-controls');

    if (videoTitleElement) {
        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'MP3';
        // downloadButton.style.backgroundImage = 'url(https://img.icons8.com/?size=100&id=1555&format=png&color=000000)'
        downloadButton.style.width = "50px";
        downloadButton.style.background="none";
        downloadButton.style.color="white";
    
        videoTitleElement.insertAdjacentElement('afterend', downloadButton);

        downloadButton.addEventListener("click",async(e)=>{
            let currentUrl = window.location.href;
            let current_id = currentUrl.split("=")[1]
            console.log(current_id);
            const link_download = get_url(current_id);

            
        })
     } else {
        setTimeout(insertDownloadButton, 1000); // Retry after 1 second
    }
    
}

insertDownloadButton();




async function get_url(data_id){
    try {
    
      const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${data_id}`;
      
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '137c4c4794msh068d55bc7d3a0b9p19af27jsnb239dfca3248',
          'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com'
        }
      };
        const response =await  fetch(url, options);
        const result = await response.text();
        const data = JSON.parse(result);
        
        // setdownlaod(data['link']);
        console.log(data);
        const link = document.createElement('a');
            link.href = data["link"];
            link.download = data["link"];
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        return data["link"];
    } catch (error) {
        console.error(error);
    }
}
