<template lang="pug">
#Contact
    .space-wide
    p.heading
        span.under お問い合わせ
    .space
    .form-area
        .form-child
            .space
            q-form
                p.form-caption お名前
                q-input(v-model='userName' label='例: 山田太郎' hint='Name' outlined)
                p.form-caption メールアドレス
                q-input(v-model='userMail' label='例: example@mail.com' type='email' hint='Email' outlined)
                p.form-caption 電話番号
                q-input(v-model='userNumber' label='例: 080-0000-0000' type='tel' hint='Telephone number' outlined)
                p.form-caption お問い合わせ種類
                q-select(v-model='contactType' :options='contactTypes' outlined)
                p.form-caption お問い合わせ内容
                q-input(type='textarea' outlined)
            .space
            .column
                q-btn.self-center(flat color='white' size='1.3em' style='background: #141C64' label='内容を確認する')
            .space
    .space-wide
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class Contact extends Vue {
    private userName = '';
    private userMail = '';
    private userNumber = '';
    private contactType = null;
    private contactTypes = ['1', '2', '3', 'その他'];
}
</script>

<style scoped lang="stylus">
// @media (max-width $breakpoint-xs-max)
//     .form-caption
//         10px
</style>

<style scoped lang="stylus">
.space
    height 50px
.form-area
    max-width 1024px
    background-color white
    border-radius 20px
.form-child
    max-width 50%
    margin 0 auto
.form-caption
    font-size 1.3em
    margin 20px 0 0 0
    font-weight bold
</style>
