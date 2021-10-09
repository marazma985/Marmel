import { create } from "react-test-renderer";
import ProfileInfo from "./ProfileInfo";


describe('ProfileInfo testing',()=>{
  test('status', () => {
    const component = create(<ProfileInfo  status='lol'/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('lol');
    
  });
})

