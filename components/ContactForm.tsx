'use client'

import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  familyname: z.string().min(2, {
    message: '姓不能為空喔.',
  }),
  lastname: z.string().min(2, {
    message: '名不能為空喔.',
  }),
  email: z.string().min(2, {
    message: '請填寫您的郵件',
  }),
  tel: z.string().min(2, {
    message: '請填寫您的電話號碼以便我們可以更快聯繫到您',
  }),
  companyname: z.string().min(2, {
    message: '公司名不能為空喔.',
  }),
  mainmessage: z.string().min(2, {
    message: '請填寫您想詢問的內容',
  }),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      familyname: '',
      lastname: '',
      email: '',
      tel: '',
      companyname: '',
      mainmessage: ''
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name="familyname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]"><strong>姓</strong></FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]"><strong>名</strong></FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]"><strong>E-mail</strong></FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tel"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]"><strong>電話號碼</strong></FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companyname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]"><strong>企業名</strong></FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mainmessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[18px]"><strong>資訊內容</strong></FormLabel>
              <FormControl>
                <Textarea className="resize-none" rows={10} placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-[220px] mx-auto overflow-hidden mt-6">
          <span className="overflow-hidden mx-auto">
            <button
              className="sm:h-[55px] sm:w-[220px] sm:rounded-[50px] bg-black text-white relative
                flex flex-wrap items-center justify-center tracking-[.5em] text-sm pl-[10px]"
              type="submit"
            >
              送信
            </button>
          </span>
        </div>
      </form>
    </Form>
  )
}
