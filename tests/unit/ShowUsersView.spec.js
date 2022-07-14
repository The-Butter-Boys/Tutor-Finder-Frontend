import ShowUsersView from "@/src/views/ShowUsersView.vue";
import {shallowMount} from "@vue/test-utils";

describe("ShowUsersView.vue", ()=> {
  
  it("is returned", async () => {
    const mockMethod = jest.spyOn(ShowUsersView.methods, 'login');
    await shallowMount(ShowUsersView).find('button').trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })
})
