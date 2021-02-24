<template>
  <div class="col-md-4 col-xl-3 chat">
    <div class="card mb-sm-3 mb-md-0 contacts_card">

      <div class="card-header">
        <h5 class="text-white">Recent</h5>
      </div>

      <div class="card-body contacts_body">
          <template v-for="(conversation, index, key) in CONVERSATIONS">
            <Conversation :conversation="conversation" />
          </template>
      </div>
      <div class="card-footer"></div>
      </div>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Conversation from "./Conversation";

    export default {
        components: {Conversation},
        computed: {
          ...mapGetters(["CONVERSATIONS", "HUBURL", "USERNAME"])
        },
        methods: {
            updateConversations(data) {
                this.$store.commit("UPDATE_CONVERSATIONS", data)
            }
        },
        mounted() {
            const vm = this;
            this.$store.dispatch("GET_CONVERSATIONS")
                .then(() => {
                    let url = new URL(this.HUBURL);
                    url.searchParams.append('topic', `/conversations/${this.USERNAME}`)
                    const eventSource = new EventSource(url, {
                        withCredentials: true
                    })

                    eventSource.onmessage = function (event) {
                        vm.updateConversations(JSON.parse(event.data))
                    }
                })
        }
    }
</script>
