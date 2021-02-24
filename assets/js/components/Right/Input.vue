<template>
  <!-- Typing area -->
  <form action="#" class="card-footer">
    <div class="input-group">
      <div class="input-group-append">
        <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
      </div>
      <input type="text" placeholder="Type your message..." v-model="content" @keyup.enter="sendMessage" aria-describedby="button-addon2" class="form-control type_msg">
      <div class="input-group-append">
        <button type="submit" class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></button>
      </div>
    </div>
  </form>
</template>

<script>
    export default {
        data: () => ({
            content: ''
        }),
        methods: {
            sendMessage() {
                this.$store.dispatch("POST_MESSAGE", {
                    conversationId: this.$route.params.id,
                    content: this.content
                }).
                    then(() => {
                        this.content = ''
                })
            }
        }
    }
</script>
