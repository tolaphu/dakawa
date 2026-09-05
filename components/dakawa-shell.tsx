"use client";

import { ChevronDown, MapPin, Menu, Phone, ShoppingCart, X } from "lucide-react";
import { ReactNode, useState } from "react";

const nav = [
  ["Sản phẩm","/san-pham"],
  ["Về DAKAWA","/ve-dakawa"],
  ["Chất lượng","/chat-luong"],
  ["Doanh nghiệp","/doanh-nghiep"],
  ["Đại lý","/dai-ly"],
  ["Liên hệ","/lien-he"],
];

export function DakawaShell({children}:{children:ReactNode}){
  const [open,setOpen]=useState(false);
  return <>
    <div className="utility"><div><span><MapPin/> 33B Lý Thái Tổ, Hội An</span><span className="utility-note">Phục vụ Hội An · Đà Nẵng</span></div><div><a href="mailto:admin@dakawa.vn">admin@dakawa.vn</a><button>VI <ChevronDown/></button></div></div>
    <header className="header"><a className="logo" href="/"><img src="/assets/dakawa-logo.png" alt="DAKAWA"/><strong>DAKAWA</strong></a><nav>{nav.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav><div className="head-actions"><a href="tel:0985959790"><Phone/> 0985 959 790</a><a className="order-head" href="/san-pham"><ShoppingCart/> Đặt nước</a><button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button></div></header>
    {open&&<nav className="mobile-menu">{nav.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav>}
    {children}
    <footer><div className="wrap footer-grid"><div className="foot-brand"><img src="/assets/dakawa-logo.png" alt="DAKAWA"/><strong>DAKAWA</strong><p>Nước uống tinh khiết đóng bình và đóng chai tại Hội An.</p></div><div><h3>SẢN PHẨM</h3><a href="/san-pham">Bình 20L</a><a href="/san-pham">Bình 7L</a><a href="/san-pham">Chai đóng thùng</a></div><div><h3>KHÁM PHÁ</h3><a href="/ve-dakawa">Về DAKAWA</a><a href="/chat-luong">Chất lượng & nhà máy</a><a href="/doanh-nghiep">Khách hàng doanh nghiệp</a><a href="/dai-ly">Đăng ký đại lý</a></div><div><h3>LIÊN HỆ</h3><p>33B Lý Thái Tổ, Hội An</p><a href="tel:02356520123">0235 652 0123</a><a href="mailto:admin@dakawa.vn">admin@dakawa.vn</a><a href="https://www.facebook.com/nuocuongdakawa/" target="_blank">Facebook DAKAWA</a></div><div className="copyright">© 2026 DAKAWA · Bản demo định hướng website <span>Thông tin thương mại cần DAKAWA xác nhận trước khi xuất bản.</span></div></div></footer>
  </>
}
