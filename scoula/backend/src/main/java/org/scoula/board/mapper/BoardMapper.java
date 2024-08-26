package org.scoula.board.mapper;

import org.apache.ibatis.annotations.Param;
import org.scoula.board.domain.BoardAttachmentVO;
import org.scoula.board.domain.BoardVO;

import java.util.List;
public interface BoardMapper {
//    @Select("SELECT * FROM tbl_board")
    public List<BoardVO> getList();

//    @Select("SELECT * FROM tbl_board WHERE no = #{no}")
    public BoardVO get(@Param("no") Long no);

//    @Insert("INSERT INTO tbl_board (title, content, writer) VALUES (#{title}, #{content}, #{writer})")
//    @Options(useGeneratedKeys = true, keyProperty = "no")
    public void create(BoardVO board);

    public int update(BoardVO board);

    public int delete(@Param("no") Long no);
    public void createAttachment(BoardAttachmentVO attach);
    public List<BoardAttachmentVO> getAttachmentList(Long bno);
    public BoardAttachmentVO getAttachment(Long no);
    public int deleteAttachment(Long no);
}