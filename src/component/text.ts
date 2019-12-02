import { GroupComponent, GroupComponentCfg, IGroup } from '../dependents';
import { LooseObject } from '../interface';

interface TextOption extends GroupComponentCfg {
  readonly isHorizontal?: boolean;
  readonly text?: string;
  readonly attributes?: object;
}

/**
 * 纯文本组件
 */
export class Text extends GroupComponent<TextOption> {
  public getDefaultCfg() {
    const cfg = super.getDefaultCfg();
    return {
      ...cfg,
      type: 'text',
      text: '',
      isHorizontal: true,
    };
  }

  protected renderInner(group: IGroup): void {
    const container = this.get('container');
    const x = this.get('x');
    const y = this.get('y');
    const text = this.get('text');
    const attributes = this.get('attributes');
    const isHorizontal = this.get('isHorizontal');

    let attrs: LooseObject = {
      x,
      y,
      text,
      textAlign: 'center',
      textBaseline: 'middle',
      fill: '#333',
      ...attributes,
    };

    if (!isHorizontal) {
      attrs = {
        ...attrs,
        rotate: -Math.PI / 2,
      };
    }

    // 添加文本
    container.addShape('text', {
      attrs,
    });
  }
  public getEvents(): any {}
}