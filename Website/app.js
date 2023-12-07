const APIKey = "AIzaSyAzniUL6ggVnVAKf_zaB59exm80LgUNhsw";
const youtubeID = "UCr1ougSGzY6itmS1jwutZdQ";

const subCount = document.querySelector(".sub_count");
const viewCount = document.querySelector(".view_count");

const getYoutubeSubs = async () => {
    const getData = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeID}&key=${APIKey}`);

    const ytSubs = getData.data.items[0].statistics.subscriberCount;

    subCount.innerHTML = ytSubs;

};

const getYoutubeViews = async() =>{
    const getData = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeID}&key=${APIKey}`);

    const ytViews = getData.data.items[0].statistics.viewCount;

    viewCount.innerHTML = ytViews;
}

getYoutubeSubs();
getYoutubeViews();