import AdminAnalytics from '@/components/admin/AdminAnalytics'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminTransaction from '@/components/admin/AdminTransaction'
import UsersTable from '@/components/admin/UsersTable'
import React from 'react'

function AdminDashboard() {
  return (
    
    <div className="min-h-screen bg-background p-6">
        {/* <AdminHeader/> */}
        {/* <AdminTransaction/>
        <UsersTable/> */}
        <AdminAnalytics/>
    </div>
  )
}

export default AdminDashboard