import type { VNode } from 'vue'

export interface IMessage {
	(options?: IMessageOptions | string): IMessageHandle
	closeAll(): void
}

export interface IMessageHandle {
	close: () => void
}

export type IMessageOptions = {
	customClass?: string
	center?: boolean
	dangerouslyUseHTMLString?: boolean // default false
	duration?: number // default 3000
	iconClass?: string
	id?: string
	message?: string | VNode
	offset?: number // defaults 20
	onClose?: () => void
	showClose?: boolean // default false
	type?: 'success' | 'warning' | 'info' | 'error' | ''
	zIndex?: number
}

export type MessageVM = VNode

type MessageQueueItem = {
	vm: MessageVM
	$el: HTMLElement
}

export type MessageQueue = Array<MessageQueueItem>
