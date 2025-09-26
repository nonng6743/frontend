"use client";
import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  Avatar,
  Card,
  CardContent,
  CardActions,
  InputAdornment,
  Rating,
} from "@mui/material";
// Layout uses Stack/Box and Tailwind grid
import WorkIcon from "@mui/icons-material/Work";
import SearchIcon from "@mui/icons-material/Search";
import VerifiedIcon from "@mui/icons-material/Verified";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import BoltIcon from "@mui/icons-material/Bolt";
import StarIcon from "@mui/icons-material/Star";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Box className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="stretch">
            <Box className="flex-1">
              <Chip icon={<VerifiedIcon />} color="secondary" label="แพลตฟอร์มรับงานสำหรับโปรแกรมเมอร์" className="mb-4" />
              <Typography variant="h3" fontWeight={800} className="tracking-tight">หางานและจ้างงานโปรแกรมเมอร์คุณภาพ</Typography>
              <Typography variant="h6" color="text.secondary" className="mt-2">
                รวมโปรแกรมเมอร์สายเว็บ แอป และคลาวด์ พร้อมผลงานจริง ราคาชัดเจน ตรงเวลา
              </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} className="mt-6">
                <TextField
                  fullWidth
                  placeholder="ค้นหา: Next.js, React, Node.js..."
                  InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment> }}
                />
            <Button variant="contained" color="primary" size="large">ค้นหา</Button>
            <Button variant="outlined" color="primary" size="large" href="#contact">คุยกับที่ปรึกษา</Button>
              </Stack>
              <Stack direction="row" spacing={1} className="mt-4 flex-wrap">
                {["Next.js", "React", "Node.js", "NestJS", "Go", "AWS"].map((skill) => (
                  <Chip key={skill} label={skill} variant="outlined" size="small" />
                ))}
              </Stack>
            </Box>
            <Box className="w-full md:w-[420px]" id="post-job">
              <Paper elevation={6} className="w-full p-6">
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={700}>โพสต์งานด่วน</Typography>
                  <TextField label="ชื่องาน" placeholder="เช่น สร้างเว็บไซต์ขายของ Next.js" fullWidth />
                  <TextField label="รายละเอียด" placeholder="คุณสมบัติ รายละเอียด ขอบเขตงาน" multiline minRows={3} fullWidth />
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField label="งบประมาณ (฿)" type="number" fullWidth />
                    <TextField label="ระยะเวลา (วัน)" type="number" fullWidth />
                  </Stack>
                  <Button variant="contained" color="secondary" startIcon={<WorkIcon />}>โพสต์งาน</Button>
                  <Typography variant="caption" color="text.secondary">ไม่มีค่าใช้จ่ายในการโพสต์งาน</Typography>
                </Stack>
              </Paper>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Trust badges */}
      <Container maxWidth="lg" className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            { icon: <SecurityIcon color="primary" />, t: "ชำระเงินปลอดภัย", d: "ปลอดภัยด้วย Escrow จ่ายเมื่อพอใจงาน" },
            { icon: <BoltIcon color="primary" />, t: "เริ่มงานรวดเร็ว", d: "ได้ผู้เชี่ยวชาญภายใน 24 ชม." },
            { icon: <VerifiedIcon color="primary" />, t: "การันตีคุณภาพ", d: "รีวิวจริงและประเมินทักษะ" },
          ].map((b, i) => (
            <Paper key={i} className="p-6">
              <Stack direction="row" spacing={2} alignItems="center">
                {b.icon}
                <Box>
                  <Typography fontWeight={700}>{b.t}</Typography>
                  <Typography color="text.secondary">{b.d}</Typography>
                </Box>
              </Stack>
            </Paper>
          ))}
        </div>
      </Container>

      {/* Featured talents */}
      <Container maxWidth="lg" className="py-12">
        <Stack direction="row" justifyContent="space-between" alignItems="center" className="mb-4">
          <Typography variant="h5" fontWeight={800}>โปรแกรมเมอร์แนะนำ</Typography>
          <Button variant="text">ดูทั้งหมด</Button>
        </Stack>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar>
                    <CodeIcon />
                  </Avatar>
                  <Box>
                    <Typography fontWeight={700}>Dev {i}</Typography>
                    <Typography variant="body2" color="text.secondary">Full‑stack • Next.js • Node.js</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={1} className="mt-2 flex-wrap">
                  {["Next.js", "TypeScript", "AWS"].map((s) => (
                    <Chip key={s} label={s} size="small" />
                  ))}
                </Stack>
              </CardContent>
              <CardActions className="justify-between px-4 pb-4">
                <Typography fontWeight={700}>฿1,500/ชม.</Typography>
                <Button size="small">ดูโปรไฟล์</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </Container>

      {/* How it works */}
      <Box className="bg-gradient-to-r from-blue-600 to-indigo-600" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h5" fontWeight={800} className="mb-6 text-white">เริ่มต้นอย่างไร</Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {[
              { t: "โพสต์งาน", d: "ระบุรายละเอียดงานและงบประมาณ" },
              { t: "รับข้อเสนอ", d: "เปรียบเทียบโปรไฟล์และรีวิว" },
              { t: "เริ่มทำงาน", d: "ชำระเงินอย่างปลอดภัย ส่งงานตรงเวลา" },
            ].map((step, idx) => (
              <Paper key={idx} className="p-6 h-full" sx={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white" }}>
                <Typography variant="h6" fontWeight={700}>{step.t}</Typography>
                <Typography className="mt-1" sx={{ color: "rgba(255,255,255,0.85)" }}>{step.d}</Typography>
              </Paper>
            ))}
          </div>
        </Container>
      </Box>

      {/* Testimonials */}
      <Container maxWidth="lg" className="py-12">
        <Stack direction="row" justifyContent="space-between" alignItems="center" className="mb-4">
          <Typography variant="h5" fontWeight={800}>ลูกค้าจริงพูดถึงเรา</Typography>
        </Stack>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="h-full">
              <CardContent>
                <Rating name={`rating-${i}`} value={5} readOnly icon={<StarIcon fontSize="inherit" />} emptyIcon={<StarIcon fontSize="inherit" />} />
                <Typography className="mt-2" color="text.secondary">
                  “งานเสร็จไว คุณภาพดี ทีมช่วยแนะนำโซลูชันที่เหมาะสมกับธุรกิจเรา”
                </Typography>
                <Typography fontWeight={700} className="mt-2">คุณ A</Typography>
                <Typography variant="body2" color="text.secondary">เจ้าของกิจการ E‑commerce</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      {/* Contact CTA */}
      <Container id="contact" maxWidth="lg" className="pb-16">
        <Paper className="p-6">
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems="stretch">
            <Box className="flex-1">
              <Typography variant="h5" fontWeight={800}>ต้องการคำแนะนำก่อนเริ่ม?</Typography>
              <Typography color="text.secondary" className="mt-1">ทิ้งข้อมูลติดต่อไว้ ทีมที่ปรึกษาจะติดต่อกลับภายใน 1 วันทำการ</Typography>
            </Box>
            <Box className="flex-1">
              <Stack spacing={2}>
                <TextField label="ชื่อของคุณ" fullWidth />
                <TextField label="อีเมล/เบอร์โทร" fullWidth />
                <TextField label="เล่าโจทย์คร่าวๆ" multiline minRows={2} fullWidth />
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button variant="contained" color="primary">ขอคำปรึกษาฟรี</Button>
                  <Button variant="outlined" color="primary" href="#post-job">หรือโพสต์งานเลย</Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </main>
  );
}
