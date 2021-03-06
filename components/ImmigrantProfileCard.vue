<template>
  <div class="section">
    <particles-bg type="lines-particles" :bg="true" />
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-full">
          <div class="container">
            <div class="field is-grouped is-grouped-multiline">
              <div v-for="tag in allTags" :key="tag.name" class="control">
                <div
                  style="cursor: pointer;"
                  v-on:click="updateTag(tag.name)"
                  class="tags has-addons"
                >
                  <span class="tag is-dark is-capitalized">{{ tag.name }}</span>
                  <span class="tag is-info">{{ tag.count }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <transition
          v-for="(immigrant, index) in filteredImmigrants"
          :key="index"
          name="fade"
        >
            <div class="column is-3">
              <div class="card">
                <div class="header">
                  <div class="avatar">
                    <img :src="immigrant.profilePicture" alt="" />
                  </div>
                </div>
                <div class="card-body">
                  <div class="user-meta has-text-centered">
                    <h3 class="username">{{ immigrant.displayName }}</h3>
                    <h5 class="position">
                      {{ immigrant.designation
                      }}<span v-if="immigrant.company">
                        - {{ immigrant.company }}</span
                      >
                    </h5>
                  </div>
                  <div class="action has-text-centered">
                    <span v-if="immigrant.twitterHandle"
                      ><a
                        :href="'https://twitter.com/' + immigrant.twitterHandle"
                        ><i class="fab fa-twitter fa-1x our-primary"></i></a
                    ></span>
                    <span v-if="immigrant.linkedinHandle"
                      ><a
                        :href="
                          'https://linkedin.com/' + immigrant.linkedinHandle
                        "
                        ><i class="fab fa-linkedin fa-1x our-primary"></i></a
                    ></span>
                    <span v-if="immigrant.githubHandle"
                      ><a :href="'https://github.com/' + immigrant.githubHandle"
                        ><i class="fab fa-github fa-1x our-primary"></i></a
                    ></span>
                    <span v-if="immigrant.wikipedia"
                      ><a :href="immigrant.wikipedia"
                        ><i class="fab fa-wikipedia-w fa-1x our-primary"></i></a
                    ></span>
                  </div>
                </div>
              </div>
            </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ImmigrantProfileCard",
  data() {
    return {
      currentTag: "all"
    };
  },
  computed: {
    ...mapGetters({ allImmigrants: "immigrants/allImmigrants" }),
    ...mapGetters({ allTags: "immigrants/allTags" }),
    filteredImmigrants: function() {
      if (
        !this.currentTag ||
        this.currentTag == "" ||
        this.currentTag == "all"
      ) {
        return this.allImmigrants;
      }

      return this.allImmigrants.filter(
        immigrant =>
          this.currentTag &&
          this.currentTag != "" &&
          this.currentTag.toLowerCase() == immigrant.designation.toLowerCase()
      );
    }
  },
  methods: {
    updateTag: function(tag) {
      this.currentTag = tag;
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  background-color: transparent !important;
}

body {
  position: relative;
  height: 100%;
  width: 100%;
}

.columns {
  margin-top: 80px;
}

$white: #ffffff;
$primary: #7f00ff;
$secondary: #00d1b2;
$section: #ededed;
$muted: #999;

.our-primary {
  transition-delay: 0.1s;
  color: $primary;
  margin-left: 5px;
}

.our-primary:hover {
  color: rgb(29, 161, 242);
  transform: scale(1.6);
  margin-left: 5px;
}

.card-body {
  padding: 30px;
  .user-meta {
    padding-top: 20px;
    .username {
      font-size: 18px;
      font-weight: 600;
    }
    .position {
      font-size: 90%;
      color: $primary;
    }
  }
}
.user-bio {
  padding-top: 8px;
  font-size: 92%;
  color: $muted;
}
.action {
  padding-top: 20px;
  .button {
    padding: 16px 20px 16px 20px;
    background: $primary;
    border-color: $primary;
    color: $white;
    border-radius: 100px;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
}

.header {
  height: 90px;
  background: $primary;
  .avatar {
    width: 80px;
    height: 100%;
    position: relative;
    margin: 0 auto;
    img {
      display: block;
      border-radius: 50%;
      position: absolute;
      bottom: -42px;
      border: 4px solid $white;
    }
  }
}

.section {
  background-color: $section;
  min-height: 100vh;
  position: relative;
}

.card {
  background-color: white;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 2px 3px,
    rgba(10, 10, 10, 0.1) 0px 0px 0px 1px;
  color: rgb(74, 74, 74);
  max-width: 100%;
  transition-delay: 0.1s;
  transition-timing-function: ease-in;
}

.card:hover {
  box-shadow: 0 5px 15px $primary;
}

.fade-enter-active,
.fade-enter,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
