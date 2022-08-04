import type { ReactNode } from "react"
import React from "react"
import { Node } from "../node.js"
import { ReacordElement } from "../reacord-element.js"

/**
 * @category Embed
 */
export type EmbedFieldProps = {
  name: ReactNode
  value?: ReactNode
  inline?: boolean
  children?: ReactNode
}

/**
 * @category Embed
 */
export function EmbedField(props: EmbedFieldProps) {
  return (
    <ReacordElement props={props} createNode={() => new EmbedFieldNode(props)}>
      <ReacordElement props={{}} createNode={() => new EmbedFieldNameNode({})}>
        {props.name}
      </ReacordElement>
      <ReacordElement props={{}} createNode={() => new EmbedFieldValueNode({})}>
        {props.value ?? props.children}
      </ReacordElement>
    </ReacordElement>
  )
}

export class EmbedFieldNode extends Node<EmbedFieldProps> {
  // override modifyEmbedOptions(options: EmbedOptions): void {
  //   options.fields ??= []
  //   options.fields.push({
  //     name: this.children.findType(FieldNameNode)?.text ?? "",
  //     value: this.children.findType(FieldValueNode)?.text ?? "",
  //     inline: this.props.inline,
  //   })
  // }
}

export class EmbedFieldNameNode extends Node<{}> {}
export class EmbedFieldValueNode extends Node<{}> {}
