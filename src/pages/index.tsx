import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root defaultValue="all">
          <Tabs.List
            className="flex gap-2 pt-10 text-sm font-bold"
            aria-label="Manage your account"
          >
            {['all', 'pending', 'completed'].map((item, index) => (
              <Tabs.Trigger
                key={'tab-filter-todo' + item + index}
                className="rounded-full border border-gray-200 px-6 py-3 text-center capitalize data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                value={item}
              >
                {item}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Tabs.Content className="pt-10" value="all">
            <TodoList statuses={['pending', 'completed']} />
          </Tabs.Content>
          <Tabs.Content className="pt-10" value="pending">
            <TodoList statuses={['pending']} />
          </Tabs.Content>
          <Tabs.Content className="pt-10" value="completed">
            <TodoList statuses={['completed']} />
          </Tabs.Content>
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
