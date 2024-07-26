import './input.css';

document.addEventListener("DOMContentLoaded", function () {
    const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
    const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${accessToken}`;

    fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
            displayPosts(data.data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});

function displayPosts(posts) {
    const postsContainer = document.getElementById("ig");
    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("w-full", "px-4", "lg:w-1/2", "xl:w-1/3");

        const postContent = `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img src="${post.media_url}" alt="" class="w-full" />
                <div class="py-8 px-6">
                    <h3>
                        <a href="${post.permalink}" class="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                            ${post.caption ? post.caption.substring(0, 30) : "Instagram Post"}
                        </a>
                    </h3>
                    <a href="${post.permalink}" target="_blank" class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">
                        View on Instagram
                    </a>
                </div>
            </div>
        `;

        postElement.innerHTML = postContent;
        postsContainer.appendChild(postElement);
    });
}
