<template>
    <div>
        <div id="Banners" :style="{ 'backgroundImage': 'url(' + currentBannerUrl + ')' }" @transitionend="transitionEnd">
            <div class="arrow left" style="user-select: none;" @click="changeBanner(-1)" :class="{ 'disabled': transitionInProgress }">‹</div>
            <div class="arrow right" style="user-select: none;" @click="changeBanner(1)" :class="{ 'disabled': transitionInProgress }">›</div>
        </div>
    </div>
</template>

<script>
import Banner1 from '/public/img/Banner1.jpg';
import Banner2 from '/public/img/Banner2.jpg';
import Banner3 from '/public/img/Banner3.jpg';

export default {
    name: "Banner",
    data() {
        return {
            currentBanner: 1,
            totalBanners: 3,
            bannerImages: [Banner1, Banner2, Banner3],
            currentBannerUrl: Banner1,
            transitionInProgress: false,
            timerId: null
        };
    },
    methods: {
        changeBanner(direction) {
            if (this.transitionInProgress) {
                return;
            }

            this.transitionInProgress = true;

            clearInterval(this.timerId);

            this.currentBanner += direction;

            if (this.currentBanner > this.totalBanners) {
                this.currentBanner = 1;
            } else if (this.currentBanner < 1) {
                this.currentBanner = this.totalBanners;
            }

            this.currentBannerUrl = this.bannerImages[this.currentBanner - 1];
        },

        transitionEnd() {
            this.transitionInProgress = false;
        }
    },

    mounted() {
        this.changeBanner(0);
    }
};
</script>

<style scoped>
#Banners {
    position: relative;
    background-size: cover;
    height: 680px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: background-image 1s ease;
    overflow: hidden; 
    position: relative;
}

.arrow {
    position: absolute;
    top: 50%;
    font-size: 24px;
    cursor: pointer;
    color: white;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s ease;
    opacity: 0;
    transition: opacity 0.5s ease;
    
}

.arrow.left.disabled,
.arrow.right.disabled {
    pointer-events: none;
}

#Banners:hover .arrow {
    opacity: 1;
}

.arrow:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

.left {
    left: 10px;
}

.right {
    right: 10px;
}

.arrow:hover {
    background-color: rgba(0, 0, 0, 0.8);
}
</style>