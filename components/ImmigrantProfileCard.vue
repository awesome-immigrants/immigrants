<template>
  <div class="container">
    <div class="title-wrapper has-text-centered">
      <h2 class="subtitle is-2">who is Who and From Where</h2>
      <div class="divider is-centered"></div>
    </div>

    <vueper-slides
      class="no-shadow"
      :visible-slides="visibleSlidesCount"
      :slide-ratio="1 / 4"
      :dragging-distance="70"
      :gap="2"
      :fixed-height="slideHeight"
    >
      <vueper-slide
        v-for="(immigrant, index) in allImmigrants"
        :key="index"
        :title="index.toString()"
      >
        <template v-slot:content>
          <div class="card is-primary">
            <div class="card-image">
              <figure class="image is-1by1">
                <img
                  :src="immigrant.profilePicture"
                  :alt="immigrant.displayName"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{ immigrant.displayName }}</p>
                  <p class="subtitle is-6">@{{ immigrant.twitterHandle }}</p>
                </div>
              </div>

              <div class="content">
                <b>{{ immigrant.designation }}</b
                ><i> at </i><b>{{ immigrant.company }}</b>
              </div>
            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "ImmigrantProfileCard",
  data() {
    return {
      visibleSlidesCount: 3,
      slideHeight: "600px"
    };
  },
  computed: {
    ...mapGetters({ allImmigrants: "immigrants/allImmigrants" })
  },
  components: {
    VueperSlides,
    VueperSlide
  },
  mounted: function() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize()
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize(event) {
      if (window.innerWidth > 960) {
        this.visibleSlidesCount = 3;
        this.slideHeight = "600px";

        return;
      }

      this.visibleSlidesCount = 1;
      this.slideHeight = window.innerHeight;
    }
  }
};
</script>

<style scoped>
.vueperslide {
  transition: 0.2s !important;
}
.vueperslide:hover {
  transform: translateY(-1rem);
}
.vueperslide--active:hover {
  border: 1px solid red;
}

.title-wrapper {
  max-width: 500px;
  margin: 0 auto;
}

.has-text-centered {
  text-align: center !important;
}

.divider.is-centered {
  margin: 0 auto;
}
.divider {
  height: 3px;
  border-radius: 50px;
  background: #f39200;
  width: 120px;
  margin-bottom: 25px !important;
}
</style>
