<template>
  <div>
    <box gap="10px 10px">
      <div>
        <x-button text="已有会员卡，立即登录"></x-button>
      </div>
      <div>
        <group>
          <x-input type="text" placeholder="姓名">
            <span slot="label" class="icon-wrap">
              <span class="red">*</span>
              <span class="icon icon-huiyuan"></span>
            </span>
          </x-input>
        </group>
        <group>
          <x-input type="text" placeholder="姓名">
            <icon slot="label" font-class="icon-huiyuan"></icon>
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
