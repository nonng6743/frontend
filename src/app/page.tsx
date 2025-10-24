"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import StorageIcon from "@mui/icons-material/Storage";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmailIcon from "@mui/icons-material/Email";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Box className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950" sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography variant="h2" fontWeight={900} className="leading-tight">
              พัฒนาเว็บไซต์ • AI Chatbot • Web Scraping
            </Typography>
            <Typography variant="h6" color="text.secondary" className="max-w-3xl">
              nonxdev ให้บริการพัฒนา ระบบเว็บไซต์เชิงพาณิชย์ chatbot AI ที่ฉลาด และ web scraping สำหรับ ทำให้ธุรกิจของคุณเติบโต
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Services */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight={800} textAlign="center" className="mb-6">
          บริการที่เราให้
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              icon: <CodeIcon sx={{ fontSize: 48 }} color="primary" />,
              t: "พัฒนาเว็บไซต์",
              d: "เว็บไซต์เชิงพาณิชย์ (eCommerce) ระบบจัดการ Dashboard โปรแกรมใหม่ โดยใช้เทคโนโลยีล่าสุด Next.js React Node.js",
            },
            {
              icon: <SmartToyIcon sx={{ fontSize: 48 }} color="primary" />,
              t: "AI Chatbot",
              d: "ออกแบบ chatbot ตอบคำถามลูกค้าอัตโนมัติ รับคำสั่งซื้อ เชื่อมกับ API จัดการออเดอร์ ประหยัดเวลาทีม",
            },
            {
              icon: <StorageIcon sx={{ fontSize: 48 }} color="primary" />,
              t: "Web Scraping",
              d: "เก็บข้อมูลจากเว็บไซต์อื่น ตรวจสอบราคา ข้อมูลคู่แข่ง วิเคราะห์ตลาด อัตโนมัติและประหยัด",
            },
            {
              icon: <AutoAwesomeIcon sx={{ fontSize: 48 }} color="primary" />,
              t: "Business Automation Systems",
              d: "พัฒนาระบบอัตโนมัติสำหรับธุรกิจของคุณ ลดความต้องการของพนักงาน ประหยัดเวลาและค่าใช้จ่าย",
            },
          ].map((svc, i) => (
            <Grid key={i} size={{ xs: 12, md: 3 }}>
              <Paper className="p-6 h-full">
                <Stack spacing={2} alignItems="center" textAlign="center">
                  <Box>{svc.icon}</Box>
                  <Typography fontWeight={700} variant="h6">
                    {svc.t}
                  </Typography>
                  <Typography color="text.secondary">{svc.d}</Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Portfolio */}
      <Box className="bg-gray-50 dark:bg-slate-900" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={800} textAlign="center" className="mb-6">
            ผลงานเสร็จสิ้น
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                t: "ระบบขายของออนไลน์",
                d: "eCommerce ที่สมบูรณ์พร้อมระบบชำระเงิน จัดการสต็อก ดูรายงาน",
                tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
                img: "bg-gradient-to-br from-blue-400 to-blue-600",
              },
              {
                t: "Chatbot ตอบสอบ AI",
                d: "ตอบคำถาม FAQ ลูกค้า 24/7 รับคำสั่งซื้อ หรือชี้นำไปหน้าที่เหมาะสม",
                tech: ["OpenAI API", "Next.js", "Webhook"],
                img: "bg-gradient-to-br from-purple-400 to-pink-600",
              },
              {
                t: "Web Scraper ตรวจราคา",
                d: "ตรวจสอบราคาคู่แข่ง ส่งแจ้งเตือนเมื่อราคาเปลี่ยน",
                tech: ["Python", "Selenium", "Node.js"],
                img: "bg-gradient-to-br from-green-400 to-emerald-600",
              },
              {
                t: "ระบบจัดการโครงการ",
                d: "Dashboard สำหรับทีม ติดตามงาน จดบันทึก รายงาน",
                tech: ["React", "Firebase", "Tailwind"],
                img: "bg-gradient-to-br from-orange-400 to-red-600",
              },
            ].map((proj, i) => (
              <Grid key={i} size={{ xs: 12, md: 6 }}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <Box className={`${proj.img} h-32`} />
                  <CardContent>
                    <Typography fontWeight={800} className="mb-2">
                      {proj.t}
                    </Typography>
                    <Typography color="text.secondary" className="mb-3">
                      {proj.d}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {proj.tech.map((t) => (
                        <Chip key={t} label={t} size="small" />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Us */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight={800} textAlign="center" className="mb-6">
          ทำไมต้องเลือก nonxdev
        </Typography>
        <Grid container spacing={2}>
          {[
            "ทีมพัฒนาประสบการณ์ 5+ ปี",
            "โค้ดสวยเรียบร้อย บำรุงรักษาง่าย",
            "สนับสนุน 24/7 แก้ไขปัญหาด่วน",
            "ส่งงานตรงเวลา ไม่ตัดสินใจเลวร้าย",
            "ราคาแข่งขัน คุ้มค่าเงินลงทุน",
            "ทดลองได้ฟรี ตรวจสอบ POC",
          ].map((p, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <CheckCircleIcon color="primary" sx={{ flexShrink: 0 }} />
                <Typography>{p}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Info */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight={800} textAlign="center" className="mb-4">
          ติดต่อเราได้ตลอด
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 700, mx: "auto" }}>
          {[
            {
              icon: <MailIcon sx={{ fontSize: 28 }} color="primary" />,
              t: "Line ID",
              v: "0823592799",
              link: "https://line.me/R/ti/p/0823592799",
            },
            {
              icon: <PhoneIcon sx={{ fontSize: 28 }} color="primary" />,
              t: "เบอร์โทร",
              v: "0830292314",
              link: "tel:0830292314",
            },
            {
              icon: <EmailIcon sx={{ fontSize: 28 }} color="primary" />,
              t: "อีเมล",
              v: "nonthanakit6743@gmail.com",
              link: "mailto:nonthanakit6743@gmail.com",
            },
          ].map((c, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper className="p-3 text-center h-full hover:shadow-lg transition-shadow">
                <Stack spacing={1} alignItems="center">
                  <Box>{c.icon}</Box>
                  <Typography variant="body2" fontWeight={700}>{c.t}</Typography>
                  <Typography variant="body2" color="primary" fontWeight={800}>
                    {c.v}
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth size="small" href={c.link} target="_blank" rel="noopener noreferrer">
                    ติดต่อ
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
