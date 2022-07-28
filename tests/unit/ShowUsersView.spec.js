import LoginUserView from "@/views/LoginUserView.vue";
import {shallowMount} from "@vue/test-utils";

describe("LoginUserView.vue", ()=> {
  
  it("is returned", async () => {
    const mockMethod = jest.spyOn(LoginUserView.methods, 'submitLogin');
    await shallowMount(LoginUserView).find('button').trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })

})
