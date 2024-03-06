
using _0._0.DataTransferLayer.Objects;
using _5._0.DataAccessLayer.Entities;
using AutoMapper;

namespace _5._0.DataAccessLayer
{
    public static class InitAutoMapper
    {
        private static bool _initMapper = true;
        public static IMapper mapper;

        public static void start()
        {
            if(_initMapper)
            {
                var config = new MapperConfiguration(cfg =>
                {
                    cfg.CreateMap<DtoUser, User>().MaxDepth(7);
                    cfg.CreateMap<DtoComment, Comment>().MaxDepth(7);

                    cfg.CreateMap<User, DtoUser>().MaxDepth(7);
                    cfg.CreateMap<Comment, DtoComment>().MaxDepth(7);

                });
                mapper = config.CreateMapper();
                _initMapper = false;

            }

        }
    }
}
