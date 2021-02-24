<template>
  <router-link :to="{name: 'conversation', params: {id: conversation.conversationId}}" class="contacts">
    <li class="active">
      <div class="d-flex bd-highlight">
        <div class="img_cont">
          <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img">
          <span class="online_icon"></span>
        </div>
        <div class="user_info">
          <span>{{ conversation.username }}</span>
          <p>{{ date }} {{ conversation.content }}</p>
        </div>
      </div>
    </li>
  </router-link>
</template>

<script>
    export default {
        props: {
            conversation: Object
        },
        computed: {
            date() {
                return new Date(this.conversation.createdAt).toLocaleString();
            }
        }
    }
</script>
