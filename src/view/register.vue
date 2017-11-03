<template>
  <div>
    <box gap="10px 10px">
      <div>
        <x-button text="已有会员卡，立即登录"></x-button>
      </div>
      <div>
        <group>
          <x-input type="text" placeholder="姓名">
            <icon slot="label" font-class="icon-huiyuan" required></icon>
          </x-input>
        </group>
        <group>
          <x-input type="text" placeholder="手机号码">
            <icon slot="label" font-class="icon-shouji" required></icon>
          </x-input>
        </group>
        <group>
          <x-input type="text" placeholder="验证码">
            <icon slot="label" font-class="icon-yanzhengma" required></icon>
          </x-input>
        </group>
        <group>
          <x-input type="text" placeholder="生日">
            <icon slot="label" font-class="icon-shengri" required></icon>
          </x-input>
        </group>
        <group>
          <x-input type="text" placeholder="身份证号码">
            <icon slot="label" font-class="icon-shenfenzheng"></icon>
          </x-input>
        </group>
      </div>
    </box>  
  </div>
</template>

<script>
import {XButton, Box, Group, XInput} from 'vux'
import icon from '../components/icon-warp'

export default {
  components: {XButton, Box, Group, XInput, icon}
}
</script>
