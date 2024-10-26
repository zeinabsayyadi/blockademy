import { Button, Card, ConfigProvider, Flex, Typography } from "antd";
import Image from "next/image";
import { EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { FC } from "react";
const { Meta } = Card;

interface CourseProps {
  id: string;
  thumbnail: string;
  title: string;
  instructor: string;
  description?: string; // Optional description for the single course page
  price?: number;
}
interface CourseCardProps extends CourseProps {
  onClick?: () => void; // Optional click handler
  editable?: boolean;
}

const CourseCard: FC<CourseCardProps> = ({
  id,
  thumbnail,
  title,
  description,
  price=200,
  instructor,
  onClick,
  editable,
}) => {
  const router = useRouter();
  const onEditCourse = (e) => {
    e.stopPropagation();
    // router.replace(`/account/my-teaches/edit-course/${id}`);
  };
  return (
    <ConfigProvider theme={{}}>
      <Card
        key={id}
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
            src={thumbnail ?? ""}
            alt={title}
            width={240}
            height={240}
            className="cover-image"
          />
        }
        onClick={onClick}
      >
        <Meta
          title={title}
          description={
            <Flex vertical>
              <Typography.Text>{description}</Typography.Text>
              <Flex
                justify="space-between"
                align="flex-start"
                vertical
              >
                <Typography.Text>{instructor}</Typography.Text>
                <Flex
                  justify="space-between"
                  align="center"
                  className="w-full"
                >
                  {/* <Typography.Text>{totalVideos} videos</Typography.Text> */}
                  <Button>{price}</Button>
                </Flex>{" "}
                {editable && (
                  <Button onClick={onEditCourse}>
                    <EditOutlined />
                  </Button>
                )}
              </Flex>
            </Flex>
          }
        />
      </Card>
    </ConfigProvider>
  );
};

export default CourseCard;
